export default (data) => {
  return {
    id: data['id'],
    arrivalDate: data['arrival_date'], // "12.05.18"
    arrivalTime: data['arrival_time'], // "22:10"
    carrier: data['carrier'], // "TK"
    departureDate: data['departure_date'], // "12.05.18"
    departureTime: data['departure_time'], // "16:20"
    destination: data['destination'], // "TLV"
    destinationName: data['destination_name'], // "Тель-Авив"
    origin: data['origin'], // "VVO"
    originName: data['origin_name'], // "Владивосток"
    price: data['price'], // 12400
    stops: data['stops'], // 3
  }
}