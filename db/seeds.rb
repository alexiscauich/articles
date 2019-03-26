# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Article.create!([
  { title: 'Product 001' },
  { text: 'Product 002' },
  { title: 'Product 003' },
  { text: 'Product 004' }
])
