import {Meta, StoryFn} from '@storybook/angular';
import {MatSqButtonComponent} from './mat-sq-button.component';
import {faSmile} from "@fortawesome/free-solid-svg-icons";

export default {
  title: 'MatSqButton',
  component: MatSqButtonComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const SmileIcon = Template.bind({});
SmileIcon.args = {
  icon: faSmile
};
SmileIcon.parameters = {
  content: {
    template: "Example Btn"
  }
};


export const Primary: StoryFn = () => ({
  props: {
    label: 'Button',
    primary: true,
  },
});

export const Secondary: StoryFn = () => ({
  props: {
    label: '😄👍😍💯',
    backgroundColor: '#ff0',
  },
});

export const Tertiary: StoryFn = () => ({
  props: {
    label: '📚📕📈🤓',
    backgroundColor: '#ff0',
  },
});


export const AllDefaults = Template.bind({});
