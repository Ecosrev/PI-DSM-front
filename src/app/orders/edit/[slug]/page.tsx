"use client";

import EditTemplate from "@/components/templates/beneficio/EditTemplate";

interface OrderEditProps {
  params: { slug: string };
}

const OrderEdit: React.FC<OrderEditProps> = ({ params }) => {
  return <EditTemplate />;
};

export default OrderEdit;
