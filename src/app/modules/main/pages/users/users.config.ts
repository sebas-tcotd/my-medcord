import { ColDef } from 'ag-grid-community';

export const UsersTableColumns: ColDef[] = [
  { field: 'dni', headerName: 'DNI' },
  { field: 'lastname', headerName: 'Apellido' },
  { field: 'name', headerName: 'Nombre' },
  { field: 'telephone', headerName: 'Celular' },
  { field: 'email', headerName: 'Correo Electrónico' },
  { field: 'role', headerName: 'Rol' },
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
