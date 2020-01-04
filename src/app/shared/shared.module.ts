import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillRangeComponent } from './skill-range/skill-range.component';
import { ListComponent, ListItemComponent, ListTitleComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactSkillsComponent } from './contact-skills/contact-skills.component';

@NgModule({
  declarations: [
    SkillRangeComponent,
    ListComponent,
    ListItemComponent,
    ListTitleComponent,
    HeaderComponent,
    FooterComponent,
    ContactSkillsComponent
  ],
  exports: [
    HeaderComponent,
    ContactSkillsComponent,
    ListComponent,
    ListItemComponent,
    ListTitleComponent,
    FooterComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
