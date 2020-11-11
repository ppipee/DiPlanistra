import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import TextAreaForm from '.'

export default {
	title: 'components/form/TextAreaForm',
	component: TextAreaForm,
} as Meta

const Template: Story = args => <TextAreaForm {...args} />

export const Example = Template.bind({})

Example.args = {
	variant: 'default',
	disabled: false,
}
