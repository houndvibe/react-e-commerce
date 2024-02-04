import { Input, Select } from "antd";
import Utilities from "../../services/utilities";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../redux/productsSlice";
import classes from "./FilterPannel.module.scss";

interface FilterPannelProps {
  onChangeCategory: (value: { value: string; label: React.ReactNode }) => void;
  onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSort: (value: string) => void;
}

const FilterPannel: React.FC<FilterPannelProps> = ({
  onChangeCategory,
  onChangeFilter,
  onChangeSort,
}) => {
  const allProducts = useSelector(selectAllProducts);
  const categoriesEntries = Utilities.createCategories(allProducts);
  return (
    <div className={classes.filterPannel}>
      <div>
        <Select
          labelInValue
          defaultValue={{ value: "all", label: "all (100)" }}
          style={{ width: 120 }}
          onChange={onChangeCategory}
          options={categoriesEntries.map((item) => {
            return { value: item[0], label: item[0] + `(${item[1]})` };
          })}
        />
      </div>
      <div>
        <Select
          defaultValue="popularity"
          style={{ width: 120 }}
          onChange={onChangeSort}
          options={[
            { value: "price up", label: "price up" },
            { value: "price down", label: "price down" },
          ]}
        />
      </div>
      <div>
        <Input placeholder="Filter" onChange={onChangeFilter} />
      </div>
    </div>
  );
};

export default FilterPannel;
