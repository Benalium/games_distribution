type User struct {
	ID       int    `json:"id"`
	Login    string `json:"login"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"pass"`
	Role     byte   `json:"role"`
}
type Order struct {
	ID        int     `json:"id"`
	ID_User   int     `json:"id_user"` // Changed to "user_id"
	PayMethod string  `json:"paymethod"` // Changed to "payment_method"
	DateTime  string  `json:"datetime"`
	Amount    float64 `json:"Amount"` // Changed to "amount".
	Status    bool    `json:"status"`
}
type ItemOrder struct {
	ID_Product int   `json:"id_pr"`
	ID_Order   int   `json:"id_ord"`
	Quantity   int64 `json:"quantity"`
}
type Product struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Genre       string  `json:"genre"`
	Platform    string  `json:"platform"`
	Publisher   string  `json:"publesher"` // Changed to publisher.
	Image       string  `json:"image"`
	Price       float64 `json:"price"`
	Quantity    int64   `json:"quantity"`
}