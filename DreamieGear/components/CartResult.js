import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export default function CartResult(props) {
  return (
    <BoxCartResult>
      <ResultNumber>$2,500</ResultNumber>
      <TouchableOpacity>
      <ResultButton>Checkout</ResultButton>
      </TouchableOpacity>
    </BoxCartResult>
  )
}

const BoxCartResult = styled.View `
  elevation: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 20px 15px;
  border: 1px solid #e1e1e1;
  flex-direction: row;
  align-items: center;
`
const ResultNumber = styled.Text `
  font-size: 30px;
  font-weight: 600;
  flex: 1
`
const ResultButton = styled.Text `
  padding: 12px 20px;
  background: tomato;
  color: white;
  text-transform: uppercase;
  align-self: flex-end;
  border-radius: 3px;
  text-align: right;
  flex: 1
`