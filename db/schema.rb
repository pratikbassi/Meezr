# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_13_040509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "btree_gin"
  enable_extension "btree_gist"
  enable_extension "citext"
  enable_extension "cube"
  enable_extension "dblink"
  enable_extension "dict_int"
  enable_extension "dict_xsyn"
  enable_extension "earthdistance"
  enable_extension "fuzzystrmatch"
  enable_extension "hstore"
  enable_extension "intarray"
  enable_extension "ltree"
  enable_extension "pg_stat_statements"
  enable_extension "pg_trgm"
  enable_extension "pgcrypto"
  enable_extension "pgrowlocks"
  enable_extension "pgstattuple"
  enable_extension "plpgsql"
  enable_extension "tablefunc"
  enable_extension "unaccent"
  enable_extension "uuid-ossp"
  enable_extension "xml2"

  create_table "categories", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "meal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meal_id"], name: "index_favorites_on_meal_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "product"
    t.string "nut_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meal_categories", force: :cascade do |t|
    t.bigint "meal_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_meal_categories_on_category_id"
    t.index ["meal_id"], name: "index_meal_categories_on_meal_id"
  end

  create_table "meal_ingredients", force: :cascade do |t|
    t.bigint "meal_id"
    t.bigint "ingredient_id"
    t.integer "serving_size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_meal_ingredients_on_ingredient_id"
    t.index ["meal_id"], name: "index_meal_ingredients_on_meal_id"
  end

  create_table "meal_photos", force: :cascade do |t|
    t.string "image_url"
    t.bigint "meal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meal_id"], name: "index_meal_photos_on_meal_id"
  end

  create_table "meals", force: :cascade do |t|
    t.bigint "user_id"
    t.boolean "is_public", default: true
    t.boolean "is_deleted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_meals_on_user_id"
  end

  create_table "user_preferences", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "ingredient_id"
    t.boolean "is_disliked", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_user_preferences_on_ingredient_id"
    t.index ["user_id"], name: "index_user_preferences_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "email"
    t.string "user_password"
    t.integer "bmi"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "favorites", "meals"
  add_foreign_key "favorites", "users"
  add_foreign_key "meal_categories", "categories"
  add_foreign_key "meal_categories", "meals"
  add_foreign_key "meal_ingredients", "ingredients"
  add_foreign_key "meal_ingredients", "meals"
  add_foreign_key "meal_photos", "meals"
  add_foreign_key "meals", "users"
  add_foreign_key "user_preferences", "ingredients"
  add_foreign_key "user_preferences", "users"
end
