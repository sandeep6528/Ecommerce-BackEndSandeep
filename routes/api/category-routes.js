const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try {
    const getallcategory = await Category.findAll({
      include:[Product]

    })
    res.status(200).json(getallcategory)
  } catch (error) {
    res.status(500).json(error)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  try {
    const getonecategory = await Category.findOne({
      where:{
        id:req.params.id
      }
    })
    res.json(getonecategory)
  } catch (error) {
    res.status(500).json(error)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const postCategory = await Category.create(req.body)
    res.json(postCategory)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body,{
      where:{ 
        id:req.params.id
       }
    })
    res.json(updateCategory)
    } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy(
      {
        where:{
          id:req.params.id
        }
      }
    )
    res.json(deleteCategory)
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
