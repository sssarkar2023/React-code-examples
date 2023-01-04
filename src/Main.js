import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
const allCategories = ['All', ...new Set(items.map((item) => item.category))];
function Main() {
    const [menuItems, setMenuItems] = useState(items);
    const categories = allCategories;
    
    const filterItems = (category) => {
        if (category === 'All') {
            setMenuItems(items);
            return;
        }

        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <>
            
            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>Our Menu</h2>
                        <div className="underline"></div>
                    </div>
                </section>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems}/>
            </main>
    </>
    )
}

export default Main;