import * as React from "react";
import {Hero, HeroBackground} from "./Hero";
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {Container, type ContainerOwnProps} from "@mui/material";
import {useAppContext} from "@legion-builder/context";

type Props = {
  hero?: JSX.Element;
  heroBackgroundImage?: string;
  header?: JSX.Element;
  headerProps?: {
    height?: number;
  };
  footer?: JSX.Element;
  containerProps?: Omit<ContainerOwnProps, "children">;
  children: React.ReactNode;
};

export function PageLayout({
  hero,
  heroBackgroundImage,
  header,
  headerProps,
  footer,
  containerProps = {},
  children,
}: Props) {
  const {
    config: {pageConfig},
  } = useAppContext();
  const headerHeight = headerProps?.height ?? pageConfig.header.maxHeight;
  return (
    <>
      {hero && <HeroBackground imgSrc={heroBackgroundImage} />}
      {header && <Header maxHeight={headerHeight}>{header}</Header>}
      <Main>
        {hero && <Hero headerHeight={header ? headerHeight : 0}>{hero}</Hero>}
        {
          <Container fixed {...containerProps}>
            {children}
          </Container>
        }
      </Main>
      {footer && <Footer>{footer}</Footer>}
    </>
  );
}
