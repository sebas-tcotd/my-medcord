import { ColDef } from 'ag-grid-community';
import { ActionsCellComponent } from '../../../../shared/actions-cell/actions-cell.component';

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
    cellRenderer: ActionsCellComponent,
  },
];
