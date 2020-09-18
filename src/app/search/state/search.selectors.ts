import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComicsState } from '../../comics/state/comics.reducer';

const getComicsFeatureState = createFeatureSelector<ComicsState>("search comics")

export const getSearchComics = createSelector(
  getComicsFeatureState,
  (state: ComicsState) => state
)