import { createAction, props } from "@ngrx/store";
import { Proposal, Dataset, Attachment } from "shared/sdk";

export const fetchProposalsAction = createAction("[Proposal] Fetch Proposals");
export const fetchProposalsCompleteAction = createAction(
  "[Proposal] Fetch Proposals Complete",
  props<{ proposals: Proposal[] }>()
);
export const fetchProposalsFailedAction = createAction(
  "[Proposal] Fetch Proposals Failed"
);

export const fetchCountAction = createAction("[Proposal] Fetch Count");
export const fetchCountCompleteAction = createAction(
  "[Proposal] Fetch Count Complete",
  props<{ count: number }>()
);
export const fetchCountFailedAction = createAction(
  "[Proposal] Fetch Count Failed"
);

export const fetchProposalAction = createAction(
  "[Proposal] Fetch Proposal",
  props<{ proposalId: string }>()
);
export const fetchProposalCompleteAction = createAction(
  "[Proposal] Fetch Proposal Complete",
  props<{ proposal: Proposal }>()
);
export const fetchProposalFailedAction = createAction(
  "[Proposal] Fetch Proposal Failed"
);

export const fetchProposalDatasetsAction = createAction(
  "[Proposal] Fetch Datasets",
  props<{ proposalId: string }>()
);
export const fetchProposalDatasetsCompleteAction = createAction(
  "[Proposal] Fetch Datasets Complete",
  props<{ datasets: Dataset[] }>()
);
export const fetchProposalDatasetsFailedAction = createAction(
  "[Proposal] Fetch Datasets Failed"
);

export const fetchProposalDatasetsCountAction = createAction(
  "[Proposal] Fetch Datasets Count",
  props<{ proposalId: string }>()
);
export const fetchProposalDatasetsCountCompleteAction = createAction(
  "[Proposal] Fetch Datasets Count Complete",
  props<{ count: number }>()
);
export const fetchProposalDatasetsCountFailedAction = createAction(
  "[Proposal] Fetch Datasets Count Failed"
);

export const addAttachmentAction = createAction(
  "[Proposal] Add Attachment",
  props<{ attachment: Attachment }>()
);
export const addAttachmentCompleteAction = createAction(
  "[Proposal] Add Attachment Complete",
  props<{ attachment: Attachment }>()
);
export const addAttachmentFailedAction = createAction(
  "[Proposal] Add Attachment Failed"
);

export const updateAttachmentCaptionAction = createAction(
  "[Proposal] Update Attachment Caption",
  props<{ proposalId: string; attachmentId: string; caption: string }>()
);
export const updateAttachmentCaptionCompleteAction = createAction(
  "[Proposal] Update Attachment Caption Complete",
  props<{ attachment: Attachment }>()
);
export const updateAttachmentCaptionFailedAction = createAction(
  "[Proposal] Update Attachment Caption Failed"
);

export const removeAttachmentAction = createAction(
  "[Proposal] Remove Attachment",
  props<{ proposalId: string; attachmentId: string }>()
);
export const removeAttachmentCompleteAction = createAction(
  "[Proposal] Remove Attachment Complete",
  props<{ attachmentId: string }>()
);
export const removeAttachmentFailedAction = createAction(
  "[Proposal] Remove Attachment Failed"
);

export const setTextFilterAction = createAction(
  "[Proposal] Set Text Filter",
  props<{ text: string }>()
);
export const setDateRangeFilterAction = createAction(
  "[Proposal] Set Date Range Filter",
  props<{ begin: string; end: string }>()
);

export const clearFacetsAction = createAction("[Proposal] Clear Facets");

export const changePageAction = createAction(
  "[Proposal] Change Page",
  props<{ page: number; limit: number }>()
);
export const changeDatasetsPageAction = createAction(
  "[Proposal] Change Datasets Page",
  props<{ page: number; limit: number }>()
);

export const sortByColumnAction = createAction(
  "[Proposal] Sort By Column",
  props<{ column: string; direction: string }>()
);
