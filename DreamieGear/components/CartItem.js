import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export default function CartItem(props) {
  return (
    <BoxCartItem>
      <CartItemImage source={{ uri: "http://lorempixel.com/640/480/city" }} />
      <Detail>
        <Name>Chôn Mặt Lùng</Name>
        <Price>36,00</Price>
      </Detail>
      <ChangeQuantity>
        <TouchableOpacity>
          <ChangeQuantityButton>-</ChangeQuantityButton>
        </TouchableOpacity>
        <QuantityNumber>99</QuantityNumber>
        <TouchableOpacity>
          <ChangeQuantityButton>+</ChangeQuantityButton>
        </TouchableOpacity>
      </ChangeQuantity>
    </BoxCartItem>
  )
}

const BoxCartItem = styled.View`
  elevation: 2;
  padding: 15px;
  border-radius: 5px;
  margin: 0 15px 15px 15px;
  flex-direction: row;
  align-items: center;
`
const CartItemImage = styled.Image `
  width: 80px;
  height: 60px;
`
const Detail = styled.View `
  margin-left: 10px;
  flex: 100
`
const Name = styled.Text `
  font-weight: 500;
`
const Price = styled.Text `
  color: #585858;
`
const ChangeQuantity = styled.View `
  flex-direction: row;
  flex: 80px;
`
const ChangeQuantityButton = styled.Text `
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: #999;
  color: #FFF;
  text-align: center;
  line-height: 22px;
`
const QuantityNumber = styled.Text `
  font-size: 16px;
  font-weight: 600;
  margin: 0 5px;
`