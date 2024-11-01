"use client";

import CustomTable from "@/components/UI/organisms/CustomTable";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`${env.apiBaseUrl}/pedido`);

      const products = response.data.pedidos.map((pedido: any) => ({
        id: pedido.id,
        date: pedido.data,
        document: pedido.cpf,
        paymentType: pedido.forma_pagamento,
        itemQuantity: pedido.quantidade_itens,
        totalValue: pedido.valor_total,
      }));

      setRows(products);
    };

    fetchOrders();
  }, []);

  const headCells = [
    {
      id: "document",
      numeric: false,
      disablePadding: false,
      label: "CPF",
    },
    {
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Data",
    },
    {
      id: "paymentType",
      numeric: false,
      disablePadding: false,
      label: "Forma de Pagamento",
    },
    {
      id: "itemQuantity",
      numeric: true,
      disablePadding: false,
      label: "Quantidade de Itens",
    },
    {
      id: "totalValue",
      numeric: true,
      disablePadding: false,
      label: "Valor Total",
    },
  ];

  return (
    <Layout>
      <Box> Lista de Pedidos </Box>
      <CustomTable rows={rows} headCells={headCells} editPath="/orders/edit" />
    </Layout>
  );
};

export default Orders;
