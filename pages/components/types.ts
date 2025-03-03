export type NotizTypes = {
  notiz: string;
  completed: boolean;
  id: string;
};

export type AddTaskProps = {
  setNoteList: React.Dispatch<React.SetStateAction<NotizTypes[]>>;
};

export type NotelistProps = {
  noteList: NotizTypes[];
};

export type HandleFunctions = {
  handleDelete: () => void;
  handleDeleteBack?: () => void;
  deleteNoteChecker?: boolean;
};

export type DeletedListPropsSetState = {
  setDeletedList: React.Dispatch<React.SetStateAction<NotizTypes[]>>;
};

export type DeletedListProps = {
  deletedList: NotizTypes[];
};
