import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@devdocs/components/AppTableContainer";
import AppLoader from "@devdocs/components/AppLoader";
import { ProductDataType } from "@devdocs/types/models/ecommerce/EcommerceApp";

type Props = {
  productData: ProductDataType[];
  loading: boolean;
};

const ProductTable = ({ productData, loading }: Props) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {loading ? (
            <AppLoader />
          ) : (
            productData.map((data) => <TableItem data={data} key={data.id} />)
          )}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default ProductTable;
