/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      product: '1776px',
      tab: '1061px',
      mob: '869px',
      xs: '518px',
      min: '375px',
    },

    fontSize: {
      small: '12px',
      lable: '16px',
      main: '64px',
      reg: '14px',
      big: '36px',
      mid: '24px',
      hero: '40px',
      giant: '48px',
    },
    extend: {
      colors: {
        error: '#ff0033',
        dark: '#353945',
        backGray: '#F4F5F6',
        green: '#45B36B',
        lightOne: '#FBF9FA',
        primary: '#EE2051',
        white: '#FFFFFF',
        black: 'black',
        gray: '#777E90',
        gold: '#E5C643',
        lightGray: '#E6E8EC',
        purple: '#9757D7',
      },
    },
  },
  plugins: [],
  variants: {
    display: ['group-hover'],
    display: ['subgroup-hover'],
  },
};
