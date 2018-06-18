import * as React from "react";
import { StyledFunction } from "styled-components";
import styled, { theme } from "../../theme";
// tslint:disable:no-shadowed-variable

interface IDivStyled {
  [x: string]: any;
}

const div: StyledFunction<IDivStyled & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export const VideoItemListStyled = div`
  width: 100%;
  text-align:left;
  `;

export const VideoItemStyled = div`
width: 210px;
display: inline-block;
position: relative;
vertical-align: top;
padding-right: 4px;
margin-bottom: 20px;
`;

export const VideoItemImage = div`
height: 118px;
background-color: black;
background-image: url(${({ image }) => image});
background-size: cover;
background-position: center;
`;

export const VideoItemBottom = div`
padding-right: 24px;
padding-top: 5px;
text-align: left;
`;

export const VideoItemTitle = div`
font-weight: bold;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
-webkit-line-clamp: 2;
max-height: 32px;
line-height: 1rem;
margin: 8px 0 8px;
display: -webkit-box;
color: ${() => theme.defaultColor};
`;

export const VideoItemSubTitle = div`
max-height: 3.6rem;
overflow: hidden;
font-size: 13px;
font-weight: 400;
color: ${() => theme.darkColor};
`;
