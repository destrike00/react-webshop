import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
import { categories } from "../category-menu/categories-component";
const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                return <CategoryItem key={category.id} category={category} />;
            })}
        </div>
    );
};
export default Directory;
