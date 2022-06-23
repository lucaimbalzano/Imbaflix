import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/tryNow';

export default function TryNow({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TryNow.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

TryNow.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

TryNow.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

TryNow.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
