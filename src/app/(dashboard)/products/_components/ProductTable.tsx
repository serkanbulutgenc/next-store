'use client'

import { DataGrid, DataGridProps, GridDataSource, GridGetRowsParams, GridGetRowsResponse, GridColDef, Toolbar, ToolbarButton, ColumnsPanelTrigger, FilterPanelTrigger, ExportCsv, ExportPrint } from '@mui/x-data-grid'
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { Box, Button, IconButton } from '@mui/material';

interface IProductTable extends Omit<DataGridProps, "columns"> { }

const CustomToolbar = () => {
    return <Toolbar>
        <Box sx={{display:'flex', flexDirection:'row-reverse', justifyContent:'space-between', width:'100%'}}>
            <Box>
            <ToolbarButton
                aria-describedby="new-panel"
                onClick={() => ''}
                render={<Button variant='contained' size='small' startIcon={<AddIcon fontSize='small'/>}>Add</Button>}                
            />
            
            </Box>
            <Box>
            <ColumnsPanelTrigger
                render={<ToolbarButton render={<IconButton><ViewColumnIcon fontSize="small" /></IconButton>} />}
            />
            <FilterPanelTrigger
                render={<ToolbarButton render={<IconButton><FilterListIcon fontSize='small' /></IconButton>} />}
            />
            <ExportCsv render={<ToolbarButton render={<IconButton><FileDownloadIcon fontSize='small' /></IconButton>} />} />
            <ExportPrint render={<ToolbarButton render={<IconButton><PrintIcon fontSize='small' /></IconButton>} />} />
            </Box>
        </Box>
    </Toolbar>
}

const productsColumns: GridColDef[] = [
    {
        field: 'thumbnail', type: 'string', headerName: 'Image', renderCell(params) {
            return <img src={params.value} alt="alt" width={50} height={50} />
        },
    },
    { field: 'title', type: 'string', headerName: 'Title' },
    { field: 'price', type: 'number', headerName: 'Price' },
    { field: 'category', type: 'string', headerName: 'Category', sortable: false },
    { field: 'stock', type: 'boolean', headerName: 'InStock', sortable: false },
]

const productsDataSource: GridDataSource = {
    getRows: async (params: GridGetRowsParams): Promise<GridGetRowsResponse> => {
        //console.log(params)

        const urlParams = new URLSearchParams({
            limit: JSON.stringify(params.paginationModel?.pageSize),
            skip: JSON.stringify(params.paginationModel?.page),
            //paginationModel: JSON.stringify(params.paginationModel),
            filterModel: JSON.stringify(params.filterModel),

        });

        if (params.sortModel.length > 0) {
            urlParams.append('sortBy', params.sortModel?.[0]?.field)
            urlParams.append('order', params.sortModel?.[0]?.sort)
        }

        const response = await fetch(`https://dummyjson.com/products?${urlParams.toString()}`)

        const { products, total } = await response.json()

        return {
            rows: products,
            rowCount: total

        }
    },

}


export default function ProductTable({ ...props }: IProductTable) {
    return <>
        <DataGrid columns={productsColumns} dataSource={productsDataSource} initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 }, rowCount: 0 },
        }}
            slots={{ toolbar: CustomToolbar }}
            pageSizeOptions={[5, 10, 20, 50]} onDataSourceError={(error) => console.log(error)} {...props} />
    </>
}