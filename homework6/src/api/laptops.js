export const laptops = [
    {id: 10, title: "Laptop1", price: 279, description: 'model1 description', category:'electronics', subcategory:'laptops', mark:'Asus', model:'model1'},
    {id: 11, title: "Laptop2", price: 309, description: 'model2 description', category:'electronics', subcategory:'laptops', mark:'Asus', model:'model2'},
    {id: 12, title: "Laptop3", price: 849, description: 'model3 description', category:'electronics', subcategory:'laptops', mark:'Asus', model:'model3'},
    {id: 13, title: "Laptop4", price: 404, description: 'model1 description', category:'electronics', subcategory:'laptops', mark:'Dell', model:'model1'},
    {id: 14, title: "Laptop5", price: 709, description: 'model2 description', category:'electronics', subcategory:'laptops', mark:'Dell', model:'model2'},
    {id: 15, title: "Laptop6", price: 609, description: 'model1 description', category:'electronics', subcategory:'laptops', mark:'HP', model:'model1'},
    {id: 15, title: "Laptop6", price: 609, description: 'model1 description', category:'electronics', subcategory:'phones', mark:'HP', model:'model1'},

]

export const getLaptopMarks = () => {
 const filteredObjects = laptops.filter((laptop) => {
    if(laptop.subcategory === 'laptops' ){
        return laptop;
    }});
  return [...new Set(filteredObjects.map(laptop => laptop.mark))];
}

export const getMarkModels = (currentSubcategory, currentMark) => {
    const filteredObjects = laptops.filter((laptop) => {
    if(laptop.subcategory === currentSubcategory && laptop.mark === currentMark){
        return laptop;
    }});
  return [...new Set(filteredObjects.map(laptop => laptop.model))]
}

export const getModel = (currentSubcategory, currentMark, currentModel) => (laptops.find(laptop => {
    if(laptop.subcategory === currentSubcategory && laptop.mark === currentMark  && laptop.model === currentModel ){
        return laptop;
    }
}));