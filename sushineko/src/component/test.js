


<div className="media">
  <img src={nigiri.image} className="mr-3" alt={nigiri.name}>
  <div className="media-body">
    <h5 className="mt-0">{nigiri.name}</h5>
        <p>
            {nigiri.description} <br />
            Price:${nigiri.price}<br />
            <Button type="submit">Order</Button>
        </p>
  </div>
</div>