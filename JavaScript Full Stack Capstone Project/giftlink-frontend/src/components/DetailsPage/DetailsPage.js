import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailsPage.css';

function DetailsPage() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [gift, setGift] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	useEffect(() => {
        const authenticationToken = sessionStorage.getItem('auth-token');
        if (!authenticationToken) {
			// Task 1: Check for authentication and redirect
            {{insert code here}}
        }

        // get the gift to be rendered on the details page
        const fetchGift = async () => {
            try {
				// Task 2: Fetch gift details
                const response ={{insert code here}}
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGift(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGift();

		// Task 3: Scroll to top on component mount
		{{ insert code here }}

    }, [productId]);


    const handleBackClick = () => {
		// Task 4: Handle back click
		{{ insert code here }}
	};

	//The comments have been hardcoded for this project.
    const comments = [
        {
            author: "John Doe",
            comment: "I would like this!"
        },
        {
            author: "Jane Smith",
            comment: "Just DMed you."
        },
        {
            author: "Alice Johnson",
            comment: "I will take it if it's still available."
        },
        {
            author: "Mike Brown",
            comment: "This is a good one!"
        },
        {
            author: "Sarah Wilson",
            comment: "My family can use one. DM me if it is still available. Thank you!"
        }
    ];


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!gift) return <div>Gift not found</div>;

return (
        <div className="container mt-5">
            <button className="btn btn-secondary mb-3" onClick={handleBackClick}>Back</button>
            <div className="card product-details-card">
                <div className="card-header text-white">
                    <h2 className="details-title">{gift.name}</h2>
                </div>
                <div className="card-body">
                    <div className="image-placeholder-large">
                        {gift.image ? (
			// Task 5: Display gift image
			/*insert code here*/
                        ) : (
                            <div className="no-image-available-large">No Image Available</div>
                        )}
                    </div>
                    // Task 6: Display gift details
                    	<p><strong>Category:</strong> 
				{/* insert code here  */}
			</p>
                    	<p><strong>Condition:</strong> 
				{/* insert code here  */}
                    	</p>
                    	<p><strong>Date Added:</strong> 
				{/* insert code here  */}
                        </p>
                    	<p><strong>Age (Years):</strong> 
				{/* insert code here  */}
                    	</p>
                    	<p><strong>Description:</strong> 
				{/* insert code here  */}
                    	</p>
                </div>
            </div>
            <div className="comments-section mt-4">
                <h3 className="mb-3">Comments</h3>
				// Task 7: Render comments section by using the map function to go through all the comments
				{{ insert code here }} => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <p className="comment-author"><strong>{comment.author}:</strong></p>
                            <p className="comment-text">{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailsPage;
