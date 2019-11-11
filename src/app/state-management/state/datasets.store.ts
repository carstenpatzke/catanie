import { DatasetFilters, Dataset, ArchViewMode } from "state-management/models";

export interface DateTriple {
  year: number;
  month: number;
  day: number;
}

export interface FacetCount {
  _id?: string | DateTriple;
  count: number;
}

export interface FacetCounts {
  [field: string]: FacetCount[];
}

export interface DatasetState {
  datasets: Dataset[];
  selectedSets: Dataset[];
  currentSet: Dataset;
  totalCount: number;

  facetCounts: FacetCounts;
  hasPrefilledFilters: boolean;
  searchTerms: string;
  keywordsTerms: string;
  filters: DatasetFilters;

  batch: Dataset[];

  openwhiskResult: object;
}

export const initialDatasetState: DatasetState = {
  datasets: [],
  selectedSets: [],
  currentSet: null,
  totalCount: 0,

  facetCounts: {},
  hasPrefilledFilters: false,
  searchTerms: "",
  keywordsTerms: "",
  filters: {
    modeToggle: ArchViewMode.all,
    mode: {},
    text: "",
    creationTime: null,
    type: [],
    creationLocation: [],
    ownerGroup: [],
    skip: 0,
    limit: 25,
    sortField: "creationTime:desc",
    keywords: [],
    scientific: [],
    isPublished: false
  },

  batch: [],

  openwhiskResult: {}
};
