import { cilDescription, cilPuzzle, cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import React from 'react';

const _nav = [
  {
    component: CNavItem,
    name: 'Introdução',
    to: '/gam/introducao',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   },
  {
    component: CNavItem,
    name: 'Micro-Frontend',
    to: '/microfrontend',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Get Start',
  },

  {
    component: CNavGroup,
    name: 'Estudo da Viabilidade',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Viabilidades Técnicas',
        to: '/gam/viabilidades-tecnicas',
      },
      {
        component: CNavItem,
        name: 'Viabilidades Gerenciais',
        to: '/gam/viabilidades-gerenciais',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Implementação',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Operacional',
        to: '/gam/inplementacao-operacional',
      },
      {
        component: CNavItem,
        name: 'Integração',
        to: '/gam/inplementacao-integração',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Expansão',
    to: '/microfrontend',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Escalabilidade',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Manutenibilidade',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Projeto Piloto',
    to: '/microfrontend',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav