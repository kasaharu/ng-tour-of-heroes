import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  RouterTestingHarness,
  RouterTestingModule,
} from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let harness: RouterTestingHarness;
  let component: HeroDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      declarations: [HeroDetailComponent],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('detail/1', HeroDetailComponent);

    harness.detectChanges();
  });

  it('should create the app', async () => {
    // expect(component).toBeTruthy();

    await harness.navigateByUrl('detail/10');
    harness.detectChanges();
    expect(component).toBeTruthy();
  });
});
