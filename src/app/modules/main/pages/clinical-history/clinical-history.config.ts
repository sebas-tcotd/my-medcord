import { ColDef } from 'ag-grid-community';

export const ClinicalHistoryTableColumns: ColDef[] = [
  { field: 'id', headerName: 'N° de H.C' },
  { field: 'dni', headerName: 'DNI/CE' },
  { field: 'lastName', headerName: 'Apellidos' },
  { field: 'firstName', headerName: 'Nombres' },
  { field: 'birthdate', headerName: 'Fecha Nac.' },
  { field: 'nationality', headerName: 'Nacionalidad' },
  { field: 'telephone', headerName: 'Teléfono' },
  {
    field: 'actions',
    headerName: 'Acciones',
    cellRenderer: () => `
    <div class="flex gap-3 items-center flex-row h-full cursor-pointer">

      <button type="button" class="flex items-center w-12">
        <span class="material-symbols-outlined"> edit </span>
      </button>

      <button type="button" class="flex items-center w-12">
        <span class="material-symbols-outlined"> back_hand </span>
      </button>
    </div>`,
  },
];
