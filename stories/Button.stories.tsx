import React from 'react';
import {Meta} from '@storybook/react';
import ButtonDoc from '../src/lib/button/OtherName';

export default {
    component: ButtonDoc,
    title: '示例/Button',
} as Meta;

export const 所有参数 = (args: any) => <ButtonDoc {...args}>按钮</ButtonDoc>;
// 所有参数.args = {pdfUrl: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'};
export const 基本使用 = () => <ButtonDoc>按钮</ButtonDoc>;
