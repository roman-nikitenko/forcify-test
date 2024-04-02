const getTitleCard = async () => {
  const response = await fetch("https://www.boredapi.com/api/activity")
  const card = response.json()

  console.log(card)
  return card
}

export default getTitleCard();