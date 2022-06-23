import React from 'react';
import { Pane, Title, SubTitle, Image, Container, Item, Inner } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {console.log('START CONTAINER')}
      {console.log(children)}
      {children}
    </Container>
  );
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return (
    <Pane {...restProps}>
      {console.log('START PANE')}
      {console.log(children)}
      {children}
    </Pane>
  );
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
