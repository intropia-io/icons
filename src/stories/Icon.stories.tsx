import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconsList } from './components/IconsList'


export default {
  title: 'Libs/Icons',
  component: IconsList,
  argTypes: {}
} as ComponentMeta<typeof IconsList>

const Template: ComponentStory<typeof IconsList> = (args) => <IconsList {...args} />

export const Icon = Template.bind({})
Icon.args = {
  color: '#000',
  size: 60
}
