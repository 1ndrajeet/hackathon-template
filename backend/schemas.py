from pydantic import BaseModel, ConfigDict


class HealthResponse(BaseModel):
    status: str = "ok"
    app: str
    environment: str
    timestamp: str
    version: str = "0.1.0"

    model_config = ConfigDict(extra="forbid")


class RootResponse(BaseModel):
    message: str
    docs_url: str
    health_url: str

    model_config = ConfigDict(extra="forbid")
