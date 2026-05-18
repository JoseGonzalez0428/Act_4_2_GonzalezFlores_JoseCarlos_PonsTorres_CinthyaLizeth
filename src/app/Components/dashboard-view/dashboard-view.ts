import { Component } from '@angular/core';

import { HeaderUaslp } from '../header-uaslp/header-uaslp';
import { FooterUaslp } from '../footer-uaslp/footer-uaslp';
import { Card } from '../card/card';
import { MatterForm } from '../matter-form/matter-form';
import { SearchBoxComponent } from '../search-box/search-box';
import { ButtonComponent } from '../button/button';
import { InputComponent } from '../input/input';

type CourseCard = {
  title: string;
  subtitle: string;
  description: string;
  progressLabel: string;
  progressValue: number;
  buttonText: string;
  footerLabel: string;
  variant: 'primary' | 'success' | 'warning' | 'error';
};

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [
    HeaderUaslp,
    FooterUaslp,
    Card,
    MatterForm,
    SearchBoxComponent,
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.css'
})
export class DashboardView {
  showMatterForm = false;

  courses: CourseCard[] = [
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'warning'
    },
    {
      title: 'Diseno De Interfacez',
      subtitle: 'Grupo 2026/1',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 25,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'primary'
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'primary'
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'primary'
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'warning'
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'error'
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'error'
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'primary'
    }
  ];

  openMatterForm(): void {
    this.showMatterForm = true;
  }

  closeMatterForm(): void {
    this.showMatterForm = false;
  }

  acceptMatterForm(): void {
    this.showMatterForm = false;

    this.courses.push({
      title: 'Nueva Materia',
      subtitle: 'Grupo 2026',
      description: 'Texto',
      progressLabel: 'Label',
      progressValue: 0,
      buttonText: 'Button',
      footerLabel: 'Label',
      variant: 'success'
    });
  }
}
