import { Request, Response } from "express";
import { QueryResult } from "pg";

import pool from "../database";

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users");
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json("Internal Error");
  }
};

export const getUserByID = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      `SELECT * FROM users WHERE id= ${id}`
    );
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json("Internal error");
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, senha } = req.body;
    const response: QueryResult = await pool.query(
      `INSERT INTO users (name, email, senha) VALUES ('${name}', '${email}', MD5(${senha}))`
    );
    console.log(response.rows);
    return res.status(200).json("Criado com sucesso!");
  } catch (err) {
    return res.status(500).json("Internal Error");
  }
};
export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
    name,
    email,
    id
  ]);
  return res.json(`User ${id} Atualização bem sucedida`);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      `DELETE FROM users WHERE id =${id}`
    );
    return res.status(200).json("Deletado com sucesso");
  } catch (err) {
    return res.status(500).json("Internal Error");
  }
};
