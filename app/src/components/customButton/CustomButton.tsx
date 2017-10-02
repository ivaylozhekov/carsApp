import * as React from 'react';
import * as classNames from 'classnames';

export const CustomButton = props => (
    <button className={classNames('custom-btn', props.className)}>{props.children}</button>
);
