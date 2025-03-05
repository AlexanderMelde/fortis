import {HttpErrorResponse} from "@angular/common/http";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { Gym } from '../models/gym.model';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return gyms data', () => {
    const mockData: Gym[] = [
      {
        id: 1,
        name: 'Monterey Park',
        description:
          'Sint ea quam sed. Consequatur dolorem facilis repellendus ipsam explicabo. Magni et accusantium in ab est optio quis ut. In sint optio ipsa. Hic ab quos repellat ratione quia.',
        price: '683.00',
        imageUrl: 'https://placecats.com/1600/900/?gym',
        quantity: 82819,
      },
      {
        id: 2,
        name: 'Port Rodolfochester',
        description:
          'Voluptate voluptatem et ipsa voluptatibus exercitationem cumque esse. Eaque vero eveniet ipsa vel mollitia ad. Et occaecati enim libero maiores velit ab nulla asperiores. Corrupti et sequi eveniet accusantium quae sed. Dolorum atque et sit. Voluptatum vero dolorem sit dicta expedita voluptatibus repellendus.',
        price: '915.00',
        imageUrl: 'https://placecats.com/1600/900/?gym',
        quantity: 19896,
      },
    ];

    service.sendGetRequest().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/gyms');
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
  //
  // it('should handle HTTP errors', () => {
  //   const mockError = new ErrorEvent('network error');
  //   service.sendGetRequest().subscribe(
  //     (data) => {
  //       fail('should have failed with an HTTP error');
  //     },
  //     (error) => {
  //       expect(error).toEqual(mockError);
  //     }
  //   );
  //
  //   const req = httpTestingController.expectOne('http://localhost:3000/gyms');
  //   expect(req.request.method).toEqual('GET');
  //   req.error(mockError);
  // });
  //
  // it('should handle client-side errors', () => {
  //   const mockError = new HttpErrorResponse({
  //     error: { message: 'client error' },
  //     status: 500,
  //     statusText: 'Client Error',
  //   });
  //   spyOn(console, 'log');
  //   service.handleError(mockError);
  //   expect(console.log).toHaveBeenCalledWith(`Error: ${mockError.message}`);
  // });
  //
  // it('should handle server-side errors', () => {
  //   const mockError = new HttpErrorResponse({
  //     error: { message: 'server error' },
  //     status: 500,
  //     statusText: 'Internal Server Error',
  //   });
  //   spyOn(console, 'log');
  //   service.handleError(mockError);
  //   expect(console.log).toHaveBeenCalledWith(`Error Code: ${mockError.status}\nMessage: ${mockError.message}`);
  // });

  it('should handle errors', () => {
    const errorMessage = 'Error Code: 500\nMessage: Http failure response for http://localhost:3000/gyms: 500 Client Error';

    service.sendGetRequest().subscribe({
      error: err => {
        expect(err).toEqual(errorMessage);
      }
    });

    const req = httpTestingController.expectOne('http://localhost:3000/gyms');
    expect(req.request.method).toEqual('GET');

    req.flush(null, {status: 500, statusText: 'Client Error'});
  });

  it('should handle client-side errors', () => {
    const mockError = new HttpErrorResponse({
      error: { message: 'client error' },
      status: 500,
      statusText: 'Client Error',
    });
    spyOn(console, 'log');
    service.handleError(mockError);
    expect(console.log).toHaveBeenCalledWith(jasmine.stringContaining(`Error Code: ${mockError.status}`));
  });

  it('should handle server-side errors', () => {
    const mockError = new HttpErrorResponse({
      error: { message: 'server error' },
      status: 500,
      statusText: 'Internal Server Error',
    });
    spyOn(console, 'log');
    service.handleError(mockError);
    expect(console.log).toHaveBeenCalledWith(jasmine.stringContaining(`Error Code: ${mockError.status}`));
  });


  });

