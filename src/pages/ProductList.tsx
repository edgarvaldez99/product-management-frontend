import PageLayout from "src/components/layout/PageLayout";
import ProductColumnDef from "src/components/product/ProductColumnDef";
import UnregisteredProductColumnDef from "src/components/product/UnregisteredProductColumnDef";
import ProductFilter from "src/components/product/filters/ProductFilter";
import useProductFilterForm from "src/components/product/filters/useProductFilterForm";
import Table from "src/components/ui/Table";
import { PRODUCT_QUERY_KEY } from "src/constants";
import useIsUserLoggedIn from "src/hooks/useIsUserLoggedIn";
import useList from "src/hooks/useList";
import ProductService from "src/services/product.service";

export default function ProductList() {
  const isLogged = useIsUserLoggedIn();
  const columnDef = isLogged
    ? ProductColumnDef()
    : UnregisteredProductColumnDef();
  const getListFn = isLogged
    ? ProductService.getList
    : ProductService.getUnregisteredList;
  const { data, filters, setFilters } = useList({
    listKey: PRODUCT_QUERY_KEY,
    getListFn,
  });

  const formik = useProductFilterForm({ filters, setFilters });

  return (
    <PageLayout title="products">
      <ProductFilter formik={formik} />
      <Table rows={data ?? []} columns={columnDef} />
    </PageLayout>
  );
}
