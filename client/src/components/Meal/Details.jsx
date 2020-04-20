import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CircularProgress,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grow,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles({});

export default function Details(props) {
  const classes = useStyles();
  const {
    id,
    image,
    title,
    description,
    user,
    ingredients,
    tags,
    calories,
    score,
    prepTime,
    cost,
    is_favorited,
  } = props.state;
  const [data, setData] = useState([]);

  const fetchIngredientInfo = (objArray) => {
    const ingredientList = objArray.map((obj) => obj.product);
    const data = {
      ingredients: ingredientList,
      servings: 1,
      includeNutrition: true,
    };
    console.log("data", data);

    return axios.post("/api/ingredients/parse", data);
  };

  useEffect(() => {
    console.log("useeffect");

    fetchIngredientInfo(ingredients).then((res) => {
      if (res.status === 200) {
        console.log("res.data", res.data);
        setData(res.data);
      }
    });
  }, []);

  const showData = (array) => {
    console.log(array);

    return (
      <>
        <Typography variant="body2">Prep Time: {prepTime}</Typography>
        <Grow in="true">
          <Card>
            <CardHeader title={"Ingredients"} />
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ingredients</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {array.map((ingredient) => (
                    <TableRow key={ingredient.id}>
                      <TableCell component="th" scope="row">
                        {ingredient.originalName}
                      </TableCell>
                      <TableCell align="right">fat</TableCell>
                      <TableCell align="right">price</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grow>

        <Typography variant="body2">Approx Cost: {cost}</Typography>
      </>
    );
  };

  return (
    <div>
      {data.length === 0 ? (
        <CircularProgress color="secondary" />
      ) : (
        showData(data)
      )}
    </div>
  );
}
