from pydantic import BaseModel

class PortfolioRelatedQuery(BaseModel):
    portfolio_related_query: bool
    avoid_other_query: bool
    reasoning: str