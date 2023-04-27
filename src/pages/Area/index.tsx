import { useParams } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { baseUrl, ProductInterface } from "../../api/api";
import axios from "axios";
import { Item } from "../../components/Item";
import { Button, Menu, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

// @ts-ignore
const tele = window.Telegram.WebApp;

const AreaPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<Array<ProductInterface>>([]);
  const [addedProducts, setAddedProducts] = useState<Array<ProductInterface>>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addItem = (product: ProductInterface) => () => {
    if (addedProducts.indexOf(product) === -1) {
      setAddedProducts(addedProducts.concat([product]));
    }
  }

  const removeItem = (id: number) => () => {
    setAddedProducts(addedProducts.filter(el => el.id !== id));
    handleClose();
  };

  const makeOrder = () => {
    tele.MainButton.text = "Заплатить";
    tele.MainButton.show();

    tele.onEvent('mainButtonClicked', () => {
      tele.sendData("paymentdata");
    });
  }

  const getTotalPrice = useMemo(() => {
    // @ts-ignore
    return addedProducts.reduce((acc, currentValue) => {
      return acc + +currentValue.price;
    }, 0)
  }, [addedProducts])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<Array<ProductInterface>>(baseUrl + '/products/by-area-id', {
        params: {
          areaId: id
        }
      })

      console.log(response.data);

      setProducts(response.data)
    };

    fetchProducts()
  }, [id]);

  return (<div className={ 'items-container' }>
    { !!addedProducts.length && <><Button
      id="shopping-button"
      aria-controls={ open ? 'basic-menu' : undefined }
      aria-haspopup="true"
      aria-expanded={ open ? 'true' : undefined }
      onClick={ handleClick }
    >
      Корзина
    </Button>
      <Menu
        id="basic-menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        MenuListProps={ {
          'aria-labelledby': 'basic-button',
        } }
      >
        { addedProducts.map(el => {
          return (
            <MenuItem key={ el.id }>
              <div>{ el.name } {el.weight}</div>
              <DeleteIcon onClick={ removeItem(el.id) }/>
            </MenuItem>
          )
        }) }
        <Divider/>
        <div className='total-price'>
          <span>Итоговая цена:</span> <span className='price-value'>{ getTotalPrice.toString() } zł</span>
        </div>
        <div className="total-price buy-container">
          <Button variant='contained' size='small' onClick={makeOrder}>Приобрести</Button>
        </div>
      </Menu></> }
    { products.map(el => {
      return <Item
        key={ el.id }
        name={ el.name }
        weight={ el.weight }
        price={ el.price }
        addItem={ addItem(el) }
      />
    }) }
  </div>)
};

export default AreaPage;