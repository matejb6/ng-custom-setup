import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsModule } from '../components.module';
import { LibraryCardComponent } from './library-card.component';
import { librariesMock } from '@core/data/libraries.mock';

describe('LibraryCardComponent', () => {
  let fixture: ComponentFixture<LibraryCardComponent>;
  let component: LibraryCardComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryCardComponent);
    component = fixture.componentInstance;
    component.libraryCard = librariesMock[0];
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card', () => {
    expect(getCard(nativeElem)).toBeTruthy();
  });

  it('should render card title', () => {
    expect(getCardTitle(nativeElem)).toBeTruthy();
  });

  it('should render card content', () => {
    expect(getCardContent(nativeElem)).toBeTruthy();
  });

  it('should render card image', () => {
    expect(getCardContentImage(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(getCardTitle(nativeElem)?.innerText).toEqual(librariesMock[0].name);
  });

  it('should emit an event on card click', () => {
    spyOn(component.cardClick, 'emit');
    getCard(nativeElem)?.click();

    expect(component.cardClick.emit).toHaveBeenCalledOnceWith(librariesMock[0]);
  });
});

const getCard = (parentElem: HTMLElement): HTMLElement | null => parentElem.querySelector('mat-card.card');

const getCardTitle = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-title');

const getCardContent = (parentElem: HTMLElement): HTMLElement | null | undefined =>
  getCard(parentElem)?.querySelector('mat-card-content');

const getCardContentImage = (parentElem: HTMLElement): HTMLImageElement | null | undefined =>
  getCardContent(parentElem)?.querySelector('img.logo');
