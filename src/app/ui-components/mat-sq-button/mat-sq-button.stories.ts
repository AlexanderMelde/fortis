import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCircleQuestion, faDumbbell, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {Meta, moduleMetadata, Story, StoryObj} from '@storybook/angular';
import {HelpComponent} from '../../help/help.component';
import {LightsHelpComponent} from "../../help/lights/lights-help.component";
import {MatSqButtonComponent} from './mat-sq-button.component';

type StoryType = MatSqButtonComponent & { label?: string };

export default {
  title: 'UI-Components/MatSqButton',
  component: MatSqButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [HelpComponent],
      imports: [CommonModule, MatDialogModule, FontAwesomeModule, MatButtonModule],
    }),
  ],
  render: (args) => {
    const {label, ...props} = args;
    return {
      props,
      template: `
        <mat-sq-button [icon]="icon" help_topic="help_topic" [popup]="popup" [disabled]="disabled">
          ${label}
        </mat-sq-button>
      `
    };
  },
  parameters: {
    // docs: {
    //   page: () => import('./mat-sq-button.component.md'),
    // },
    controls: {hideNoControlsWarning: true},
  },
  argTypes: {
    label: {
      control: 'text',
    },
  },
  args: {
    label: 'Button',
    icon: faCircleQuestion,

  }
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {};


export const Dumbbell: StoryObj<StoryType> = {
  args: {
    icon: faDumbbell,
    help_topic: 'help_dumbbells',
    label: 'Dumb&shy;bells',
  },
};

export const Lights: StoryObj<StoryType> = {
  args: {
    icon: faLightbulb,
    popup: LightsHelpComponent,
    label: 'Lights',
  },
};

export const LightsDisabled: StoryObj<StoryType> = {
  args: {
    icon: faLightbulb,
    popup: LightsHelpComponent,
    label: 'Lights',
    disabled: true,
  },
};

export const MultiRows: StoryObj<StoryType> = {
  args: {
    label: 'Long Button Description',
  },
};

export const LongRows: StoryObj<StoryType> = {
  args: {
    label: 'LongButtonDescription',
  },
};

// const Template: Story<MatSqButtonComponent> = (args: MatSqButtonComponent) => ({
//   props: args,
//   template: `<mat-sq-button [icon]="icon" help_topic="help_topic">
//       Dumb&shy;bells
//     </mat-sq-button>`
// });

// export const Dumbbell = Template.bind({});
// Dumbbell.args = {
//   icon: faDumbbell,
//   help_topic: 'help_dumbbells',
//   disabled: false,
// };
