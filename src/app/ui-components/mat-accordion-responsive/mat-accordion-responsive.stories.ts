import {CommonModule} from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Meta, moduleMetadata, Story, StoryObj} from '@storybook/angular';
import {MatAccordionResponsiveComponent} from './mat-accordion-responsive.component';

type StoryType = MatAccordionResponsiveComponent & { ngContent?: string };

export default {
  title: 'UI-Components/MatAccordionResponsive',
  component: MatAccordionResponsiveComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatExpansionModule, BrowserAnimationsModule],
    }),
  ],
  render: (args) => {
    const {ngContent, ...props} = args;
    return {
      props,
      template: `
        <mat-accordion-responsive>
          ${ngContent}
        </mat-accordion-responsive>
      `
    };
  },
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
  argTypes: {
    ngContent: {
      control: 'text',
    },
  },
  args: {
    ngContent: 'Placeholder',
  }
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {};


export const OnePanel: StoryObj<StoryType> = {
  args: {
    ngContent: '<mat-expansion-panel>\n' +
      '          <mat-expansion-panel-header>\n' +
      '            <div class="mat-expansion-panel-header-content">\n' +
      '              <mat-panel-title>\n' +
      '                <span>Public Profile</span>\n' +
      '              </mat-panel-title>\n' +
      '              <mat-panel-description>\n' +
      '                <span>Descripton</span>\n' +
      '              </mat-panel-description>\n' +
      '            </div>\n' +
      '          </mat-expansion-panel-header>\n' +
      '          <p>Describe how you want to be seen by other users.</p>\n' +
      '        </mat-expansion-panel>',
  },
};
