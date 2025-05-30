import json
import os
from typing import Dict, List, TypedDict

class Product(TypedDict):
    brand: str
    title: str

class BrandStats(TypedDict):
    count: int
    products: List[str]

def count_products_by_brand() -> None:
    # Adjust this path to your project location
    products_dir = "/Users/eduardogarcia/Projects/GA_Instalaciones/eCommerceCode/src/data/products"
    brand_counts: Dict[str, BrandStats] = {}

    # Read all JSON files in products directory
    for filename in os.listdir(products_dir):
        if filename.endswith('.json'):
            file_path = os.path.join(products_dir, filename)
            with open(file_path, 'r') as file:
                product = json.load(file)

                if 'brand' in product and product['brand']:
                    brand = product['brand']
                    if brand not in brand_counts:
                        brand_counts[brand] = {
                            'count': 0,
                            'products': []
                        }
                    brand_counts[brand]['count'] += 1
                    brand_counts[brand]['products'].append(product['title'])

    # Print results
    print("\nProducts count by brand:")
    print("------------------------")
    for brand, data in brand_counts.items():
        print(f"\n{brand}: {data['count']} products")
        print("Products:")
        for product in data['products']:
            print(f"- {product}")

if __name__ == "__main__":
    count_products_by_brand()