import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {of} from "rxjs";
import {ApiService} from '../../services/api.service';
import {Gym} from "../../models/gym.model";
import {BookingCardComponent} from "../../ui-components/booking-card/booking-card.component";
import {GymCardComponent} from "../../ui-components/gym-card/gym-card.component";
import {IconListItemComponent} from "../../ui-components/icon-list-item/icon-list-item.component";
import {IconListComponent} from "../../ui-components/icon-list/icon-list.component";
import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj('ApiService', ['sendGetRequest']);
    mockApiService.sendGetRequest.and.returnValue(of([]));

    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent, GymCardComponent, IconListComponent, IconListItemComponent, BookingCardComponent],
      imports: [MatFormFieldModule, MatSelectModule, MatChipsModule, FormsModule, ReactiveFormsModule, MatInputModule,
        MatCardModule, MatDividerModule, FontAwesomeModule, BrowserAnimationsModule, MatDialogModule, MatIconModule],
      providers: [{provide: ApiService, useValue: mockApiService}, {provide: MatSnackBar, useValue: mockSnackBar}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load gyms on init', () => {
    const mockData: Gym[] = [{
      "id": 1,
      "name": "Monterey Park",
      "description": "Sint ea quam sed. Consequatur dolorem facilis repellendus ipsam explicabo. Magni et accusantium in ab est optio quis ut. In sint optio ipsa. Hic ab quos repellat ratione quia.",
      "price": "683.00",
      "imageUrl": "https://placecats.com/1600/900/?gym",
      "quantity": 82819
    }, {
      "id": 2,
      "name": "Port Rodolfochester",
      "description": "Voluptate voluptatem et ipsa voluptatibus exercitationem cumque esse. Eaque vero eveniet ipsa vel mollitia ad. Et occaecati enim libero maiores velit ab nulla asperiores. Corrupti et sequi eveniet accusantium quae sed. Dolorum atque et sit. Voluptatum vero dolorem sit dicta expedita voluptatibus repellendus.",
      "price": "915.00",
      "imageUrl": "https://placecats.com/1600/900/?gym",
      "quantity": 19896
    },];


    mockApiService.sendGetRequest.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(component.isLoading).toBeFalse();
    expect(component.gyms).toEqual(mockData);
  });

  // it('should handle error on load gyms', () => {
  //   mockApiService.sendGetRequest.and.throwError('error');
  //
  //   component.ngOnInit();
  //
  //   expect(component.isLoading).toBeFalse();
  //   // expect(mockSnackBar.open).toHaveBeenCalledWith('Connection Error', 'Dismiss', {duration: 3000});
  // });
});
