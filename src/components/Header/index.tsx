import React from 'react'
import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'
import Logo from '../../assets/LogoCoffeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>

      <ActionsContainer>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          <p>Porto Alegre RS</p>
        </LocationContainer>
        <CartContainer>
          <ShoppingCart size={24} weight="fill" />
        </CartContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}
